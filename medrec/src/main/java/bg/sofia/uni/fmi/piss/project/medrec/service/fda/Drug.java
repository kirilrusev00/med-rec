package bg.sofia.uni.fmi.piss.project.medrec.service.fda;

import java.util.List;

public class Drug {
    private List<Result> results;
    private Error error;

    public Drug(List<Result> results, Error error) {
        this.results = results;
        this.error = error;
    }

    public List<Result> getResults() {
        return results;
    }

    public void setResults(List<Result> results) {
        this.results = results;
    }

    public Error getError() {
        return error;
    }

    public void setError(Error error) {
        this.error = error;
    }

    @Override
    public String toString() {
        if (error != null) {
            return error.getMessage();
        }
        return "Drug [results=" + results + "]";
    }
}
