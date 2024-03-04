
import { formatDuration } from "../utils/formatDuration"
import { formatTimeAgo } from "../utils/formatTimeAgo"

type VideoGridItemProps = {
  id: string
  title: string
  channel: {
    id: string
    name: string
    profileUrl: string
  }
  views: number
  postedAt: Date
  duration: number
  thumbnailUrl: string
  
}

const VIEW_FORMATTER = new Intl.NumberFormat(undefined, { notation: "compact" })

export function VideoRowItems({
  id,
  title,
  channel,
  views,
  postedAt,
  duration,
  thumbnailUrl,
  
}: VideoGridItemProps) {
  

  return (
    <div className="flex flex-row gap-2 py-4 ml-4">
      <a href={`/watch?v=${id}`} className="relative aspect-video">
        <img
          src={thumbnailUrl}
          className={`block w-80 h-48 object-cover transition-[border-radius] duration-200
          `}
        />
        <div className="absolute bottom-1 right-1 bg-secondary-dark text-secondary text-sm px-0.5 rounded">
          {formatDuration(duration)}
        </div>
      </a>
      <div className=" gap-2">
      <a href={`/watch?v=${id}`} className="font-semibold text-xl ">
        {title}
      </a>
      <div className="text-secondary-text text-sm mt-2">
            {VIEW_FORMATTER.format(views)} Views • {formatTimeAgo(postedAt)}
      </div>
          
        <div className="flex text-left mt-4">
          <a href={`/@${channel.id}`} className="flex-shrink-0">
          <img className="w-6 h-6 rounded-full" src={channel.profileUrl} />
        </a>
          <a href={`/@${channel.id}`} className="text-secondary-text text-sm px-2 py-1">
            {channel.name}
          </a>
        </div>
      </div>
    </div>
  )
}