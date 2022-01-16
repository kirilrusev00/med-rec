package bg.sofia.uni.fmi.piss.project.medrec.contoller;

import bg.sofia.uni.fmi.piss.project.medrec.dto.QrCodeResponseDto;
import bg.sofia.uni.fmi.piss.project.medrec.exceptions.CouldNotDecodeException;
import bg.sofia.uni.fmi.piss.project.medrec.exceptions.QrCodeNotFoundException;
import bg.sofia.uni.fmi.piss.project.medrec.exceptions.ExternalServiceNotAvailableException;
import bg.sofia.uni.fmi.piss.project.medrec.service.QrCodeService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@RequestMapping("/qr")
public class QrCodeController {
    private final QrCodeService qrCodeService;

    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public QrCodeResponseDto decodeQrCode(@PathVariable("id") String id)
            throws QrCodeNotFoundException, CouldNotDecodeException, ExternalServiceNotAvailableException {
        return qrCodeService.decodeQrCode(Long.parseLong(id));
    }
}
