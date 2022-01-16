package bg.sofia.uni.fmi.piss.project.medrec.service;

import bg.sofia.uni.fmi.piss.project.medrec.dto.UserRegistrationDto;
import bg.sofia.uni.fmi.piss.project.medrec.exceptions.UserAlreadyExistsException;
import bg.sofia.uni.fmi.piss.project.medrec.model.Type;
import bg.sofia.uni.fmi.piss.project.medrec.model.UserEntity;
import bg.sofia.uni.fmi.piss.project.medrec.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import javax.crypto.Cipher;
import javax.crypto.spec.SecretKeySpec;
import java.security.GeneralSecurityException;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final UserRepository userRepository;

    private final ModelMapper modelMapper;

    public void registerPatient(UserRegistrationDto user) throws UserAlreadyExistsException {
        checkIfUserExists(user.getUsername());

        UserEntity userEntity = toUserEntity(user, Type.patient);
        userRepository.save(userEntity);
    }


    private void checkIfUserExists(String username) throws UserAlreadyExistsException {
        Optional<UserEntity> user = userRepository.findByUsername(username);
        if (user.isPresent()) {
            throw new UserAlreadyExistsException("There is already registered user with this username. Try with another.");
        }
    }

    private boolean validateGivenPassword(String password, String passwordTry) {
        return password.equals(encrypt(passwordTry));
    }

    private static String encrypt(String strClearText) {
        String strData;
        String strKey = "ghnk";
        try {
            SecretKeySpec skeyspec = new SecretKeySpec(strKey.getBytes(), "Blowfish");
            Cipher cipher = Cipher.getInstance("Blowfish");
            cipher.init(Cipher.ENCRYPT_MODE, skeyspec);
            byte[] encrypted = cipher.doFinal(strClearText.getBytes());
            strData = new String(encrypted);
        } catch (GeneralSecurityException e) {
            throw new IllegalStateException("Problem with encrypting function", e);
        }
        return strData;
    }

    private UserEntity toUserEntity(UserRegistrationDto user, Type type) {
        UserEntity userEntity = modelMapper.map(user, UserEntity.class);
        userEntity.setType(type);

        return userEntity;
    }
}
