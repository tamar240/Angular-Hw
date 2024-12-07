import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'iconsPipes',
  standalone: true
})

export class IconsPipesPipe implements PipeTransform {
  private emojiMap: { [key: string]: string } = {
    tired: '😴',
    like: '👍',
    happy: '😊',
    sad: '😢',
    Laughing: '🤣',
    love: '❤️',
    heart: '💖',
    brokenHeart: '💔',
    kissingHeart: '😘',
    wink: '😉',
    surprise: '😲',
    angry: '😡',
    thinking: '🤔',
    party: '🎉',
    clapping: '👏',
    crying: '😭',
    starstruck: '🤩',
    fire: '🔥',
    heartEyes: '😍',
    blush: '😊',
    kiss: '💋',
    lips: '💋',
    grinning: '😁',
    smug: '😏',
    sleepy: '😪',
    cool: '😎',
    coolSmile: '😎',
    tearsOfJoy: '😂',
    peace: '✌️',
    winkHeart: '😉💖',
    loveHeart: '❤️',
    redHeart: '❤️',
    yellowHeart: '💛',
    blueHeart: '💙',
    purpleHeart: '💜',
    greenHeart: '💚',
    blackHeart: '🖤',
    whiteHeart: '🤍',
    brownHeart: '🤎',
    sparkles: '✨',
    shiningStar: '🌟',
    crescentMoon: '🌙',
    rainbow: '🌈',
    sunflower: '🌻',
    rose: '🌹',
    cherryBlossom: '🌸',
    tulip: '🌷',
    hibiscus: '🌺',
    bouquet: '💐',
    globeWithMeridians: '🌐',
    highHeeledShoes: '👠',
    lipsWithHeart: '💋💖',
    handshake: '🤝',
    ring: '💍',
    crown: '👑',
    gemStone: '💎',
    diamondShapeWithADotInside: '💠',
    shootingStar: '🌠',
    alien: '👽',
    ghost: '👻',
    skull: '💀',
    jackOLantern: '🎃',
  };

  transform(word: string): string {
   return this.emojiMap[word]||'❓';
  }
}

