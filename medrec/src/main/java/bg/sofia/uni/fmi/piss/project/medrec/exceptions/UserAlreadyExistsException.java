package bg.sofia.uni.fmi.piss.project.medrec.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.CONFLICT)
public class UserAlreadyExistsException extends Exception{

    private static final long serialVersionUID = -4924779197820854936L;

    public UserAlreadyExistsException(){
        super();
    }
    
    public UserAlreadyExistsException(String message) {
        super(message);
    }
    
}
