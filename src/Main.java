public class Main {
    public static void main(String[] args) {
        PeekabooBackend backend = new PeekabooBackend();

        backend.addProduct(1, "Ken Doll", 12.99, "Barbie", "A stylish Ken doll.", "ken_doll.jpg", "Great toy for kids!", 4.5);
        backend.addProduct(2, "Barbie Dreamhouse", 99.99, "Barbie", "A luxurious Barbie dreamhouse.", "barbie_dreamhouse.jpg", "Perfect for Barbie fans.", 4.8);
        backend.addProduct(3, "Race Car", 19.99, "Hot Wheels", "A sleek race car toy.", "race_car.jpg", "Awesome race car.", 4.2);
        backend.addProduct(4, "Track Builder", 29.99, "Hot Wheels", "Build your own race track.", "track_builder.jpg", "Fun and creative.", 4.7);
        backend.addProduct(5, "Lego Star Wars", 49.99, "Lego", "Build a Star Wars spaceship.", "lego_star_wars.jpg", "Fantastic Lego set.", 4.9);

        System.out.println("Available Products:");
        backend.displayProducts();
    }
}
