package bg.sofia.uni.fmi.piss.project.medrec.contoller;

import bg.sofia.uni.fmi.piss.project.medrec.dto.UserRegistrationDto;
import bg.sofia.uni.fmi.piss.project.medrec.exceptions.UserAlreadyExistsException;
import bg.sofia.uni.fmi.piss.project.medrec.service.AuthenticationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
@RequestMapping("/auth")
public class AuthenticationController {

    private final AuthenticationService authenticationService;

    @PostMapping("/register")
    @ResponseStatus(HttpStatus.OK)
    public void registerPatient(UserRegistrationDto userRegistrationDto) throws UserAlreadyExistsException {
        authenticationService.registerPatient(userRegistrationDto);
    }

}
