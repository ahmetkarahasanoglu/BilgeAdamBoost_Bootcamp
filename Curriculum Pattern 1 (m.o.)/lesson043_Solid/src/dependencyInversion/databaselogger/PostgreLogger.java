package dependencyInversion.databaselogger;

public class PostgreLogger implements ILogger {

	public void log() {
		System.out.println("postgreye loglandı.");
	}
	
}
