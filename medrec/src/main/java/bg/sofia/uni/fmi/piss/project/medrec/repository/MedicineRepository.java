package bg.sofia.uni.fmi.piss.project.medrec.repository;

import bg.sofia.uni.fmi.piss.project.medrec.model.MedicineEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MedicineRepository extends JpaRepository<MedicineEntity, Long> {

    Optional<MedicineEntity> findByBrandNameContainingIgnoreCase(String genericName);
}
