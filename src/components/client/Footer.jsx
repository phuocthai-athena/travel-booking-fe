const Footer = () => {
  return (
    <footer className="bg-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-lg font-semibold">About Us</h3>
            <p className="text-gray-600">
              Your trusted partner for travel bookings and accommodations.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/hotels" className="hover:text-primary text-gray-600">
                  Hotels
                </a>
              </li>
              <li>
                <a href="/flights" className="hover:text-primary text-gray-600">
                  Flights
                </a>
              </li>
              <li>
                <a href="/bookings" className="hover:text-primary text-gray-600">
                  My Bookings
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Email: support@travelbooking.com</li>
              <li>Phone: +1 234 567 890</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-gray-600">
          <p>&copy; 2024 Travel Booking. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
