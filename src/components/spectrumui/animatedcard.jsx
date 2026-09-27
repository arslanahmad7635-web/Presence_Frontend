const AnimatedCard = ({
  imgSrc,
  title,
  aboutProduct
}) => {
  return (
    <div
      className="md:w-80 border rounded-2xl shadow-lg border-white dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900 overflow-hidden transition-transform duration-300 hover:scale-105">
      <div className="p-5 flex flex-col items-center">
        <img
          className="w-32 h-32 object-contain mb-4"
          src={imgSrc}
          alt={`${title} logo`}
          width={128}
          height={128}
        />
        <div className="text-center space-y-1">
          <div className="text-2xl font-bold tracking-tight text-foreground">{title}</div>

          <p className="text-sm text-muted-foreground mt-2">{aboutProduct}</p>
        </div>
      </div>
    </div>
  );
};

export default AnimatedCard;
