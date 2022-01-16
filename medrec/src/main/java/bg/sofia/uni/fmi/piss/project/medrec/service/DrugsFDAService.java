package bg.sofia.uni.fmi.piss.project.medrec.service;

import bg.sofia.uni.fmi.piss.project.medrec.exceptions.DrugNotFoundException;
import bg.sofia.uni.fmi.piss.project.medrec.exceptions.ExternalServiceNotAvailableException;
import bg.sofia.uni.fmi.piss.project.medrec.service.fda.Drug;
import org.springframework.stereotype.Service;

import com.google.gson.Gson;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

@Service
public class DrugsFDAService {
    private static final String BASE_ENDPOINT = "https://api.fda.gov/drug/drugsfda.json";
    private static final String SEARCH_BY_BRAND_NAME = "?search=%s";
    private static final String LIMIT_SEARCHES = "&limit=1";

    private HttpClient client;

    public DrugsFDAService(HttpClient client) {
        this.client = client;
    }

    public String getRequiredInformationAsString(String searchInput)
            throws ExternalServiceNotAvailableException, DrugNotFoundException {
        // check in database and return if present

        Drug drug = getRequiredInformation(searchInput);
        if (drug.getError() != null) {
            throw new DrugNotFoundException("Drug is not available in DrugsFDA.");
        }

        return drug.toString();
    }

    private Drug getRequiredInformation(String searchInput) throws ExternalServiceNotAvailableException {
        String analyzerJsonResponse = retrieveInformationFromFDC(searchInput);
        System.out.println(analyzerJsonResponse);

        Gson gson = new Gson();
        return gson.fromJson(analyzerJsonResponse, Drug.class);
    }

    private String buildURIString(String searchInput) {
        return  BASE_ENDPOINT + String.format(SEARCH_BY_BRAND_NAME, searchInput.replace(" ", "%20"))
                + LIMIT_SEARCHES;
    }

    private String retrieveInformationFromFDC(String searchInput) throws ExternalServiceNotAvailableException {
        String analyzerURIAsString = buildURIString(searchInput);
        URI analyzerURI = URI.create(analyzerURIAsString);
        System.out.println(analyzerURI);
        HttpRequest analyzerRequest = HttpRequest.newBuilder().uri(analyzerURI).build();

        try {
            return client.send(analyzerRequest, HttpResponse.BodyHandlers.ofString()).body();
        } catch (IOException|InterruptedException e) {
            throw new ExternalServiceNotAvailableException("Error in connecting to DFC");
        }
    }
}
