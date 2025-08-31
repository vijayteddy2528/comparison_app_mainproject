import React, { useState, useEffect } from 'react';
import { Search, Plus, X, Smartphone, Laptop, Headphones, Watch, Star } from "lucide-react";

const Sampleproducts = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    category: "smartphone",
    brand: "Apple",
    price: 999,
    image: "📱",
    rating: 4.8,
    features: {
      "Display": "6.1\" Super Retina XDR",
      "Processor": "A17 Pro",
      "Storage": "128GB - 1TB",
      "Camera": "48MP Main, 12MP Ultra Wide",
      "Battery": "Up to 23 hours video",
      "OS": "iOS 17",
      "5G": "Yes",
      "Wireless Charging": "Yes"
    }
  },
  {
    id: 2,
    name: "Samsung Galaxy S24",
    category: "smartphone",
    brand: "Samsung",
    price: 1199,
    image: "📱",
    rating: 4.7,
    features: {
      "Display": "6.8\" Dynamic AMOLED 2X",
      "Processor": "Snapdragon 8 Gen 3",
      "Storage": "256GB - 1TB",
      "Camera": "200MP Main, 50MP Telephoto",
      "Battery": "5000mAh",
      "OS": "Android 14",
      "5G": "Yes",
      "Wireless Charging": "Yes"
    }
  },
  {
    id: 3,
    name: "MacBook Air M3",
    category: "laptop",
    brand: "Apple",
    price: 1299,
    image: "💻",
    rating: 4.9,
    features: {
      "Display": "13.6\" Liquid Retina",
      "Processor": "Apple M3",
      "Storage": "256GB - 2TB SSD",
      "RAM": "8GB - 24GB",
      "Battery": "Up to 18 hours",
      "OS": "macOS Sonoma",
      "Ports": "2x Thunderbolt",
      "Weight": "2.7 lbs"
    }
  },
  {
    id: 4,
    name: "Dell XPS 13",
    category: "laptop",
    brand: "Dell",
    price: 999,
    image: "💻",
    rating: 4.6,
    features: {
      "Display": "13.4\" FHD+",
      "Processor": "Intel Core i7",
      "Storage": "512GB SSD",
      "RAM": "16GB",
      "Battery": "Up to 12 hours",
      "OS": "Windows 11",
      "Ports": "2x USB-C, 1x USB-A",
      "Weight": "2.8 lbs"
    }
  },
  {
    id: 5,
    name: "Sony WH-1000XM5",
    category: "headphones",
    brand: "Sony",
    price: 399,
    image: "🎧",
    rating: 4.8,
    features: {
      "Type": "Over-ear",
      "Noise Cancelling": "Industry-leading",
      "Battery": "30 hours with ANC",
      "Connectivity": "Bluetooth 5.2",
      "Quick Charge": "3 min = 3 hours",
      "Weight": "8.8 oz",
      "Codecs": "LDAC, AAC, SBC",
      "Controls": "Touch & Voice"
    }
  },
  {
    id: 6,
    name: "Apple Watch Series 9",
    category: "smartwatch",
    brand: "Apple",
    price: 399,
    image: "⌚",
    rating: 4.7,
    features: {
      "Display": "45mm Retina",
      "Processor": "S9 SiP",
      "Storage": "64GB",
      "Battery": "Up to 18 hours",
      "Health": "ECG, Blood Oxygen",
      "Connectivity": "Wi-Fi, Bluetooth, Cellular",
      "Water Resistance": "50m",
      "OS": "watchOS 10"
    }
  }
];

export default Sampleproducts
