import Image from "next/image";

export interface Photo {
  src: string;
  caption: string;
}

interface PhotoGalleryProps {
  photos: Photo[];
}

export default function PhotoGallery({ photos }: PhotoGalleryProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {photos.map((photo) => (
        <figure
          key={photo.src}
          className="group relative overflow-hidden rounded-xl bg-navy-900 shadow-sm"
        >
          <div className="relative aspect-[4/3]">
            <Image
              src={photo.src}
              alt={photo.caption}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-900/90 via-navy-900/50 to-transparent p-4 pt-12 text-sm font-medium text-white">
            {photo.caption}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
