package bg.sofia.uni.fmi.piss.project.medrec.contoller;

import bg.sofia.uni.fmi.piss.project.medrec.dto.MedicineDto;
import bg.sofia.uni.fmi.piss.project.medrec.dto.PharmacyDrugAddDto;
import bg.sofia.uni.fmi.piss.project.medrec.dto.PharmacyDto;
import bg.sofia.uni.fmi.piss.project.medrec.exceptions.DrugNotFoundException;
import bg.sofia.uni.fmi.piss.project.medrec.exceptions.ExternalServiceNotAvailableException;
import bg.sofia.uni.fmi.piss.project.medrec.exceptions.MedicineNotFoundException;
import bg.sofia.uni.fmi.piss.project.medrec.exceptions.PharmacyNotFoundException;
import bg.sofia.uni.fmi.piss.project.medrec.service.PharmacyService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/pharmacy")
public class PharmacyController {

    private final PharmacyService pharmacyService;

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<PharmacyDto> getPharmacies(@RequestParam String name) {
        return pharmacyService.getPharmacies(name);
    }

    @GetMapping("/{id}/drugs")
    @ResponseStatus(HttpStatus.OK)
    public List<MedicineDto> getPharmacyDrugs(@PathVariable("id") Long pharmacyId, @RequestParam String name)
            throws PharmacyNotFoundException {
        return pharmacyService.getPharmacyDrugs(pharmacyId, name);
    }

    @GetMapping("/{pharmacyId}/drugs/{drugId}")
    @ResponseStatus(HttpStatus.OK)
    public MedicineDto getDrugInPharmacy(@PathVariable("pharmacyId") Long pharmacyId, @PathVariable("drugId") Long drugId)
            throws PharmacyNotFoundException, MedicineNotFoundException {
        return pharmacyService.getDrugInPharmacy(pharmacyId, drugId);
    }

    @PostMapping("/{id}/drug")
    @ResponseStatus(HttpStatus.OK) //@PathVariable("id") String pharmacyId, @RequestBody PharmacyDrugAddDto pharmacyDrugAddDto
    public void addMedicine(@PathVariable("id") String pharmacyId, @RequestBody PharmacyDrugAddDto pharmacyDrugAddDto)
            throws DrugNotFoundException, ExternalServiceNotAvailableException {
        pharmacyService.addMedicine(Long.parseLong(pharmacyId), pharmacyDrugAddDto.getBrandName());
    }

    @DeleteMapping("/{pharmacyId}/drug/{drugId}")
    @ResponseStatus(HttpStatus.OK) //@PathVariable("id") String pharmacyId, @RequestBody PharmacyDrugAddDto pharmacyDrugAddDto
    public void addMedicine(@PathVariable("pharmacyId") String pharmacyId, @PathVariable("drugId") String drugId) {
        pharmacyService.deleteMedicineForPharmacy(Long.parseLong(pharmacyId), Long.parseLong(drugId));
    }

}