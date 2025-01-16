public class Main {
    public static void main(String[] args) {
        PeekabooBackend backend = new PeekabooBackend();

        backend.addProduct(1, "Ken Doll", 12.99, "Barbie", "A stylish Ken doll.", "ken_doll.jpg", "Great toy for kids!", 4.5);
        backend.addProduct(2, "Barbie Dreamhouse", 99.99, "Barbie", "A luxurious Barbie dreamhouse.", "barbie_dreamhouse.jpg", "Perfect for Barbie fans.", 4.8);
        backend.addProduct(3, "Race Car", 19.99, "Hot Wheels", "A sleek race car toy.", "race_car.jpg", "Awesome race car.", 4.2);
        backend.addProduct(4, "Track Builder", 29.99, "Hot Wheels", "Build your own race track.", "track_builder.jpg", "Fun and creative.", 4.7);
        backend.addProduct(5, "Lego Star Wars", 49.99, "Lego", "Build a Star Wars spaceship.", "lego_star_wars.jpg", "Fantastic Lego set.", 4.9);
        backend.addProduct(6, "Lego Friends", 39.99, "Lego", "A colorful Lego friends set.", "lego_friends.jpg", "Kids love it!", 4.6);
        backend.addProduct(7, "Plush Bear", 19.99, "Toy Stuff", "A soft and cuddly plush bear.", "plush_bear.jpg", "So cuddly!", 4.8);
        backend.addProduct(8, "Stuffed Elephant", 14.99, "Toy Stuff", "A cute stuffed elephant.", "stuffed_elephant.jpg", "Adorable!", 4.4);
        backend.addProduct(9, "Barbie Skipper Babysitters", 24.99, "Barbie", "Barbie Skipper babysitting set.", "barbie_skipper.jpg", "Cute and creative.", 4.6);
        backend.addProduct(10, "Barbie Glam Convertible", 34.99, "Barbie", "Barbie's pink convertible car.", "barbie_convertible.jpg", "Stylish and fun.", 4.7);
        backend.addProduct(11, "Barbie Fashionistas", 15.99, "Barbie", "Barbie with unique styles.", "barbie_fashionistas.jpg", "Diverse and trendy.", 4.8);
        backend.addProduct(12, "Hot Wheels Monster Truck", 14.99, "Hot Wheels", "An action-packed monster truck.", "hot_wheels_truck.jpg", "Perfect for stunts.", 4.4);
        backend.addProduct(13, "Hot Wheels Loop Track", 24.99, "Hot Wheels", "Loop-the-loop race track.", "hot_wheels_loop.jpg", "Thrilling race track!", 4.6);
        backend.addProduct(14, "Lego Creator 3-in-1", 39.99, "Lego", "A 3-in-1 building set.", "lego_creator.jpg", "Great value for variety.", 4.7);
        backend.addProduct(15, "Lego Ninjago", 54.99, "Lego", "A Lego ninja-themed set.", "lego_ninjago.jpg", "Exciting and detailed.", 4.8);
        backend.addProduct(16, "Stuffed Giraffe", 16.99, "Toy Stuff", "A tall and cuddly giraffe.", "stuffed_giraffe.jpg", "Kids adore it!", 4.7);
        backend.addProduct(17, "Stuffed Panda", 17.99, "Toy Stuff", "A cute and fluffy panda.", "stuffed_panda.jpg", "Adorable and soft.", 4.9);
        backend.addProduct(18, "Squishy Unicorn", 9.99, "Squishy", "A slow-rising unicorn squishy.", "squishy_unicorn.jpg", "Super satisfying!", 4.5);
        backend.addProduct(19, "Squishy Ice Cream", 7.99, "Squishy", "Ice cream cone squishy toy.", "squishy_icecream.jpg", "Colorful and fun.", 4.6);
        backend.addProduct(20, "Squishy Cake", 8.99, "Squishy", "A delicious-looking cake squishy.", "squishy_cake.jpg", "Feels amazing!", 4.7);
        backend.addProduct(21, "Squishy Fruit Set", 12.99, "Squishy", "A set of fruit-themed squishies.", "squishy_fruit.jpg", "Kids love the variety.", 4.8);
        backend.addProduct(22, "Squishy Dinosaur", 10.99, "Squishy", "A soft dinosaur squishy.", "squishy_dinosaur.jpg", "Great stress reliever.", 4.6);
        backend.addProduct(23, "Monopoly Classic", 24.99, "Board Game", "The timeless Monopoly game.", "monopoly_classic.jpg", "Family favorite.", 4.9);
        backend.addProduct(24, "Scrabble", 19.99, "Board Game", "A word-building board game.", "scrabble.jpg", "Great for vocabulary.", 4.8);
        backend.addProduct(25, "Catan", 39.99, "Board Game", "Build and trade in Catan.", "catan.jpg", "Perfect for strategy lovers.", 4.7);
        backend.addProduct(26, "Uno", 9.99, "Board Game", "A fun card game for everyone.", "uno.jpg", "Easy and exciting.", 4.8);
        backend.addProduct(27, "Jenga", 14.99, "Board Game", "A block-stacking game.", "jenga.jpg", "Perfect for parties.", 4.6);
        backend.addProduct(28, "Iron Man Action Figure", 29.99, "Action Figure", "A detailed Iron Man figure.", "ironman_actionfigure.jpg", "Kids love superheroes.", 4.7);
        backend.addProduct(29, "Spider-Man Action Figure", 27.99, "Action Figure", "Spider-Man with movable parts.", "spiderman_actionfigure.jpg", "Great for roleplay.", 4.8);
        backend.addProduct(30, "Transformers Bumblebee", 39.99, "Action Figure", "Transforming Bumblebee toy.", "transformers_bumblebee.jpg", "Epic transformation!", 4.9);
        backend.addProduct(31, "Batman Action Figure", 25.99, "Action Figure", "A posable Batman figure.", "batman_actionfigure.jpg", "Cool and detailed.", 4.6);
        backend.addProduct(32, "Star Wars Darth Vader", 34.99, "Action Figure", "Darth Vader action figure.", "darth_vader.jpg", "Perfect for collectors.", 4.8);
        backend.addProduct(33, "Math Learning Kit", 19.99, "Educational Toy", "A kit to learn math basics.", "math_kit.jpg", "Great for early learning.", 4.6);
        backend.addProduct(34, "Alphabet Blocks", 14.99, "Educational Toy", "Colorful alphabet blocks.", "alphabet_blocks.jpg", "Helps with letters.", 4.8);
        backend.addProduct(35, "STEM Robot Kit", 49.99, "Educational Toy", "Build and code your robot.", "stem_robot.jpg", "Amazing for STEM skills.", 4.9);
        backend.addProduct(36, "Periodic Table Puzzle", 16.99, "Educational Toy", "Learn elements with puzzles.", "periodic_puzzle.jpg", "Fun and educational.", 4.7);
        backend.addProduct(37, "Shape Sorting Cube", 12.99, "Educational Toy", "Learn shapes and colors.", "shape_cube.jpg", "Simple and effective.", 4.5);

        System.out.println("Available Products:");
        backend.displayProducts();
    }
}
