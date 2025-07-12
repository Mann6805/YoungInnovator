"use client";
import { useState } from "react";
import { Upload, Image as ImageIcon } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent } from "@/app/components/ui/card";
import { Textarea } from "@/app/components/ui/textarea";
import { Input } from "@/app/components/ui/input";

const ProductDetail = () => {
  const [description, setDescription] = useState("");
  const [images, setImages] = useState<File[]>([]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImages([...images, ...Array.from(e.target.files)]);
    }
  };

  const previousListings = Array(4).fill(null);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-semibold">Product Detail Page</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Side - Image Upload */}
          <div>
            <Card className="h-96 border-2 border-dashed border-border hover:border-primary/50 transition-colors">
              <CardContent className="h-full flex flex-col items-center justify-center p-8">
                <div className="text-center">
                  <ImageIcon className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-medium mb-2">Add Images</h3>
                  <p className="text-muted-foreground mb-4">
                    Upload product photos
                  </p>
                  <Input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                    id="image-upload"
                  />
                  <Button
                    variant="outline"
                    onClick={() =>
                      document.getElementById("image-upload")?.click()
                    }
                    className="gap-2"
                  >
                    <Upload className="h-4 w-4" />
                    Choose Files
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Display uploaded images */}
            {images.length > 0 && (
              <div className="mt-4 grid grid-cols-2 gap-2">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className="aspect-square bg-muted rounded-lg flex items-center justify-center"
                  >
                    <span className="text-sm text-muted-foreground">
                      {image.name}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Side - Product Description */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-medium mb-4">
                  Add Product Description
                </h3>
                <Textarea
                  placeholder="Describe your item in detail..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="min-h-48 resize-none"
                />
              </CardContent>
            </Card>

            <div className="flex justify-center">
              <Button variant="premium" size="lg" className="px-8">
                Available/Swap
              </Button>
            </div>
          </div>
        </div>

        {/* Previous Listings Section */}
        <div className="mt-12">
          <h3 className="text-lg font-medium mb-6">Previous Listings:</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {previousListings.map((_, index) => (
              <Card
                key={index}
                className="aspect-square hover:shadow-card transition-all duration-300"
              >
                <CardContent className="h-full flex items-center justify-center p-4">
                  <div className="text-center">
                    <ImageIcon className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">
                      Previous Item {index + 1}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
