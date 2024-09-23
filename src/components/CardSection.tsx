import React from 'react';

const CardSection: React.FC = () => {
  // Array of image URLs from Unsplash
  const imageUrls = [
    'https://images.unsplash.com/photo-1619710282877-638d7ee1e45d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emElMjBtYWtlcnxlbnwwfHwwfHx8Mg%3D%3D',
    'https://images.unsplash.com/photo-1560709506-3f2fb39c2bdc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGl6emElMjBtYWtlcnxlbnwwfHwwfHx8Mg%3D%3D',
    'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGl6emElMjBtYWtlcnxlbnwwfHwwfHx8Mg%3D%3D',
    'https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGl6emElMjBtYWtlcnxlbnwwfHwwfHx8Mg%3D%3D',
    'https://images.unsplash.com/photo-1601924582970-9238bcb495d9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBpenphJTIwbWFrZXJ8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1473093226795-af9932fe5856?q=80&w=2594&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1515516969-d4008cc6241a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVhdGJhbGxzfGVufDB8fDB8fHwy',
    'https://images.unsplash.com/photo-1600175074394-f2f4c500f7ea?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1541544461120-5161e10e4256?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZnJpZWQlMjBzcXVpZHxlbnwwfHwwfHx8Mg%3D%3D',
  ];

  return (
    <section id="featured" className="py-12 bg-gray-200">
      <div className="container mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-red-600 mb-12 text-center font-rubik">
          Featured Dishes
        </h2>

        {/* Card Grid with 9 Images */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {/* Map through the array of image URLs */}
          {imageUrls.map((url, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={url}
                alt={`Dish ${index + 1}`}
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardSection;
