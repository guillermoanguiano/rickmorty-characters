export function LoadingDots() {
  return (
    <div className="flex gap-2">
      <div className="w-3 h-3 rounded-full bg-green-500 animate-bounce-slow"></div>
      <div className="w-3 h-3 rounded-full bg-green-500 animate-bounce-slow [animation-delay:0.2s]"></div>
      <div className="w-3 h-3 rounded-full bg-green-500 animate-bounce-slow [animation-delay:0.4s]"></div>
    </div>
  );
}
