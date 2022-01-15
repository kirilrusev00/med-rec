package bg.sofia.uni.fmi.piss.project.medrec;

import bg.sofia.uni.fmi.piss.project.medrec.service.QrCodeService;
import org.modelmapper.ModelMapper;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.Scanner;

@SpringBootApplication
public class MedrecApplication {

	public static void main(String[] args) {
		SpringApplication.run(MedrecApplication.class, args);

		Scanner scanner = new Scanner(System.in);
		System.out.println("Enter qr code file path:");
		String filePath = scanner.nextLine();
		System.out.println(QrCodeService.decodeQrCode(filePath));
	}

	@Bean
	public ModelMapper modelMapper() {
		return new ModelMapper();
	}
}
