import '@vidstack/react/player/styles/default/theme.css';
import '@vidstack/react/player/styles/default/layouts/video.css';
import { MediaPlayer, MediaProvider } from '@vidstack/react';
import { defaultLayoutIcons, DefaultVideoLayout } from '@vidstack/react/player/layouts/default';

export default function Home() {
  return (
    <div>
      <div>
      <MediaPlayer title="Sprite Fight" src="youtube/_cMxraX_5RE">
  <MediaProvider />
  <DefaultVideoLayout thumbnails="https://files.vidstack.io/sprite-fight/thumbnails.vtt" icons={defaultLayoutIcons} />
</MediaPlayer>
      </div>
      <div>
      <MediaPlayer title="Sprite Fight" src="https://youtu.be/DVRg0daTads?si=sPnpuco0emTdWQaD">
  <MediaProvider />
  <DefaultVideoLayout thumbnails="https://files.vidstack.io/sprite-fight/thumbnails.vtt" icons={defaultLayoutIcons} />
</MediaPlayer>
      </div>
      <div>
      <MediaPlayer title="Sprite Fight" src="https://youtu.be/hHuG7FIKgtc?si=GGTOcC1oPou53v-d">
  <MediaProvider />
  <DefaultVideoLayout thumbnails="https://files.vidstack.io/sprite-fight/thumbnails.vtt" icons={defaultLayoutIcons} />
</MediaPlayer>
      </div>
    </div>
  );
}
