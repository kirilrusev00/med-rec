package bg.sofia.uni.fmi.piss.project.medrec.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class QrCodeResponseDto {
    private String drugName;

    private String in;

    private String date;
}
