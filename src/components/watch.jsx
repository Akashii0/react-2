function watch({ name, watchImage }) {
  return (
    <div className="flex flex-col gap-2 items-center">
      <img src={watchImage} alt="watch" className="h-84 w-72" />
      <p className="font-inter text-white">{name}</p>
    </div>
  );
}

export default watch;
