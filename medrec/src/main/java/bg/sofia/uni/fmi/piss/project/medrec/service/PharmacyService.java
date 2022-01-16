package bg.sofia.uni.fmi.piss.project.medrec.service;

import bg.sofia.uni.fmi.piss.project.medrec.exceptions.DrugNotFoundException;
import bg.sofia.uni.fmi.piss.project.medrec.exceptions.ExternalServiceNotAvailableException;
import bg.sofia.uni.fmi.piss.project.medrec.model.MedicineEntity;
import bg.sofia.uni.fmi.piss.project.medrec.model.PharmacyMedicineEntity;
import bg.sofia.uni.fmi.piss.project.medrec.repository.MedicineRepository;
import bg.sofia.uni.fmi.piss.project.medrec.repository.PharmacyMedicineRepository;
import bg.sofia.uni.fmi.piss.project.medrec.service.fda.Drug;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class PharmacyService {

    private final MedicineRepository medicineRepository;

    private final DrugsFDAService drugsFDAService;

    private final PharmacyMedicineRepository pharmacyMedicineRepository;

    private final ModelMapper modelMapper;

    public void addMedicine(Long pharmacyId, String brandName)
            throws DrugNotFoundException, ExternalServiceNotAvailableException {
        Long medicineId = getMedicineId(brandName);

        if (medicineId == -1L) {
            Drug medicineDrugsFda = drugsFDAService.getDrugFromDrugsFda(brandName);
            MedicineEntity medicineEntity = toMedicineEntity(medicineDrugsFda);
            medicineId = medicineRepository.save(medicineEntity).getId();
        }

        PharmacyMedicineEntity pharmacyMedicineEntity = toPharmacyMedicineEntity(medicineId, pharmacyId);
        pharmacyMedicineRepository.save(pharmacyMedicineEntity);
    }

    @Transactional
    public void deleteMedicineForPharmacy(Long pharmacyId, Long medicineId) {
        pharmacyMedicineRepository.deleteMedicineForPharmacy(pharmacyId, medicineId);
    }

    private Long getMedicineId(String brandName) {
        Optional<MedicineEntity> medicineEntity = medicineRepository.findByBrandNameContainingIgnoreCase(brandName);
        if (medicineEntity.isPresent()) {
            return medicineEntity.get().getId();
        }
        return -1L;
    }

    private MedicineEntity toMedicineEntity(Drug drug) {
        return modelMapper.map(drug, MedicineEntity.class);
    }

    private PharmacyMedicineEntity toPharmacyMedicineEntity(Long medicineId, Long pharmacyId) {
        PharmacyMedicineEntity pharmacyMedicineEntity = new PharmacyMedicineEntity();
        pharmacyMedicineEntity.setMedicineId(medicineId);
        pharmacyMedicineEntity.setUserId(pharmacyId);

        return  pharmacyMedicineEntity;
    }
}
