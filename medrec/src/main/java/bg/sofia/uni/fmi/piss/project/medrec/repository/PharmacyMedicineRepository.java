package bg.sofia.uni.fmi.piss.project.medrec.repository;

import bg.sofia.uni.fmi.piss.project.medrec.model.PharmacyMedicineEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface PharmacyMedicineRepository extends JpaRepository<PharmacyMedicineEntity, Long> {
    @Modifying
    @Query("delete from PharmacyMedicineEntity pm where pm.medicineId=:medicineId and pm.userId=:userId")
    void deleteMedicineForPharmacy(@Param("userId") Long pharmacyId, @Param("medicineId") Long medicineId);
}
