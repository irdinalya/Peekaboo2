public class Main {
    public static void main(String[] args) {
        PeekabooBackend backend = new PeekabooBackend();

        // Example data
        backend.addProduct(1, "Ken Doll", 12.99, "Barbie", "A stylish Ken doll.", "ken_doll.jpg", "Great toy for kids!", 4.5);
        backend.addProduct(2, "Barbie Dreamhouse", 99.99, "Barbie", "A luxurious Barbie dreamhouse.", "barbie_dreamhouse.jpg", "Perfect for Barbie fans.", 4.8);
        backend.addProduct(3, "Race Car", 19.99, "Hot Wheels", "A sleek race car toy.", "race_car.jpg", "Awesome race car.", 4.2);
        backend.addProduct(4, "Track Builder", 29.99, "Hot Wheels", "Build your own race track.", "track_builder.jpg", "Fun and creative.", 4.7);
        backend.addProduct(5, "Lego Star Wars", 49.99, "Lego", "Build a Star Wars spaceship.", "lego_star_wars.jpg", "Fantastic Lego set.", 4.9);
        backend.addProduct(6, "Lego Friends", 39.99, "Lego", "A colorful Lego friends set.", "lego_friends.jpg", "Kids love it!", 4.6);
        backend.addProduct(7, "Plush Bear", 19.99, "Toy Stuff", "A soft and cuddly plush bear.", "plush_bear.jpg", "So cuddly!", 4.8);
        backend.addProduct(8, "Stuffed Elephant", 14.99, "Toy Stuff", "A cute stuffed elephant.", "stuffed_elephant.jpg", "Adorable!", 4.4);

        System.out.println("Available Products:");
        backend.displayProducts();
    }
}