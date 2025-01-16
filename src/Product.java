import java.io.Serializable;

public class Product implements Serializable {
    private int id;
    private String name;
    private double price;
    private String category;
    private String description;
    private String imageUrl;
    private String review;
    private double rating;

    public Product(int id, String name, double price, String category, String description, String imageUrl, String review, double rating) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
        this.description = description;
        this.imageUrl = imageUrl;
        this.review = review;
        this.rating = rating;
    }

    // Getters and setters
    public int getId() { return id; }
    public String getName() { return name; }
    public double getPrice() { return price; }
    public String getCategory() { return category; }
    public String getDescription() { return description; }
    public String getImageUrl() { return imageUrl; }
    public String getReview() { return review; }
    public double getRating() { return rating; }

    @Override
    public String toString() {
        return "Product [id=" + id + ", name=" + name + ", price=" + price + ", category=" + category + ", description=" + description + ", rating=" + rating + ", review=" + review "]";
    }
}