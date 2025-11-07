export function WeddingTimeline({ events, className = "" }) {
  return (
    <div className={`w-full py-12 flex justify-center ${className}`}>
      <div className="max-w-2xl w-full px-4 sm:px-6 lg:px-8">
        {/* Timeline Events */}
        <div className="space-y-0">
          {events.map((event, index) => (
            <div key={index} className="flex gap-4 sm:gap-6">
              {/* Icon */}
              <div className="flex-shrink-0 flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 text-primary min-w-[5rem] min-h-[5rem] sm:min-w-[6rem] sm:min-h-[6rem]">
                {event.icon}
              </div>

              {/* Dot and Line Container */}
              <div className="relative flex flex-col items-center">
                {/* Dot */}
                <div className="w-5 h-5 rounded-full bg-primary shadow-sm z-10 flex-shrink-0 mt-2.5" />

                {/* Connecting Line - only show if not last item */}
                {index < events.length - 1 && (
                  <div className="w-0.5 h-full bg-primary/40 absolute top-7 bottom-0" />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 pb-12">
                <div className="text-sm font-semibold text-primary font-montserrat">{event.time}</div>
                <h3 className="mt-1 text-lg sm:text-xl font-cormorant font-semibold text-foreground">
                  {event.title}
                </h3>
                <p className="mt-2 text-sm sm:text-base text-muted-foreground leading-relaxed font-montserrat">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
