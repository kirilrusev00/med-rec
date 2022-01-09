package bg.sofia.uni.fmi.piss.project.medrec.service;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.PrintWriter;
import java.net.InetSocketAddress;
import java.nio.channels.Channels;
import java.nio.channels.SocketChannel;

import io.github.cdimascio.dotenv.Dotenv;

public class QrCodeService {
    public static String decodeQrCode(String filePath) {
        try (SocketChannel socketChannel = SocketChannel.open();
             BufferedReader reader = new BufferedReader(Channels.newReader(socketChannel, "UTF-8"));
             PrintWriter printWriter = new PrintWriter(Channels.newWriter(socketChannel, "UTF-8"), true);) {

            Dotenv dotenv = Dotenv.configure().load();
            String hostname = dotenv.get("QRCODE_SERVICE_HOSTNAME");
            int port = Integer.parseInt(dotenv.get("QRCODE_SERVICE_PORT"));
            socketChannel.connect(new InetSocketAddress(hostname, port));

            System.out.println("Sending file path <" + filePath + "> to the qr code decoder...");
            printWriter.println(filePath);
            String reply = reader.readLine();

            System.out.println("The server responded with: \n" + reply);
            return reply;
        } catch (IOException e) {
            System.err.println(String.format("Error in connection to the qr code decoder!%n%s", e.getMessage()));
            return null;
        }
    }
}
