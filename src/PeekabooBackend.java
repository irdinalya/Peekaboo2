import java.io.*;
import java.util.ArrayList;
import java.util.List;

public class PeekabooBackend {
    private List<Product> products;
    private static final String DATA_FILE = "products.ser";

    public PeekabooBackend() {
        products = new ArrayList<>();
        loadProducts();
    }

    // Display all products
    public void displayProducts() {
        for (Product product : products) {
            System.out.println(product);
        }
    }

    // Save products to file
    private void saveProducts() {
        try (ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream(DATA_FILE))) {
            oos.writeObject(products);
        } catch (IOException e) {
            System.out.println("Error saving products: " + e.getMessage());
        }
    }

    // Load products from file
    private void loadProducts() {
        try (ObjectInputStream ois = new ObjectInputStream(new FileInputStream(DATA_FILE))) {
            products = (List<Product>) ois.readObject();
        } catch (FileNotFoundException e) {
            System.out.println("No existing product data found.");
        } catch (IOException | ClassNotFoundException e) {
            System.out.println("Error loading products: " + e.getMessage());
        }
    }
}