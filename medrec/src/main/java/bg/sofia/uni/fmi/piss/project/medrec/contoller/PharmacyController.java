package bg.sofia.uni.fmi.piss.project.medrec.contoller;

import bg.sofia.uni.fmi.piss.project.medrec.dto.PharmacyDrugAddDto;
import bg.sofia.uni.fmi.piss.project.medrec.exceptions.DrugNotFoundException;
import bg.sofia.uni.fmi.piss.project.medrec.exceptions.ExternalServiceNotAvailableException;
import bg.sofia.uni.fmi.piss.project.medrec.service.PharmacyService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@RequestMapping("/pharmacy")
public class PharmacyController {

    private final PharmacyService pharmacyService;

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