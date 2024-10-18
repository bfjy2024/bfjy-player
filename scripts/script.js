/*
design by Voicu Apostol.
design: https://dribbble.com/shots/3533847-Mini-Music-Player
I can't find any open music api or mp3 api so i have to download all musics as mp3 file.
You can fork on github: https://github.com/muhammederdem/mini-player
*/

new Vue({
  el: "#app",
  data() {
    return {
      audio: null,
      circleLeft: null,
      barWidth: null,
      duration: null,
      currentTime: null,
      isTimerPlaying: false,
      tracks: [
       {
          name: "自在的少年",
          artist: "要不要买菜",
          cover: "https://y.qq.com/music/photo_new/T062R800x800M000000g0vZX2zsQfU.jpg?max_age=2963246343",
          source: "https://sjy6.stream.qqmusic.qq.com/M5000021K9jl1QJA9C.mp3?guid=www.hhlqilongzhu.cn&vkey=E5D5AD59CE948F43C6AD84AEFB689CE466F05757E2A0AB2BDB4F64D8E494E4C62F5F4114796669F08553E116D805B621761B61CCE1FA7DB4&uin=3465221490&fromtag=5201314&info=cache&from=longzhu_api",
          url: "https://i.y.qq.com/v8/playsong.html?songmid=003Kwlu20jioV9&type=0",
          favorited: false,
        },
        {
          name: "年少有为",
          artist: "李荣浩",
          cover: "https://y.qq.com/music/photo_new/T002R800x800M000004QnEHc3zjC7J_1.jpg?max_age=2963246343",
          source: "https://sjy6.stream.qqmusic.qq.com/M800000KFNNA0BDekK.mp3?guid=www.hhlqilongzhu.cn&vkey=0B1A673D4803B51E74A20E2920FAEC2CC9D2AC361824D5186876764F067FC52C01CBBC3D198896393BF5EC67C7ECE15D55C45F3755D5CD23&uin=120032070&fromtag=5201314&info=cache&from=longzhu_api",
          url: "https://i.y.qq.com/v8/playsong.html?songmid=004DXFlC0nsTCZ&type=0",
          favorited: false,
        },
        {
          name: "身骑白马",
          artist: "黏苞米糊糊DJ",
          cover: "https://y.qq.com/music/photo_new/T002R800x800M000003VfY9Q15mepb_1.jpg?max_age=2963246343",
          sourse: "https://sjy6.stream.qqmusic.qq.com/M800000Zl8ez0wdt96.mp3?guid=www.hhlqilongzhu.cn&vkey=DAB3641FAC4BE3641ECAD1F9AE17DE7B3EDDA59B3F5A449B91A0ECDBE56445E95CE2426D29D1A33B64C23F488CAAB2C7AD73AD4DC65228CA&uin=1984867194&fromtag=5201314&info=cache&from=longzhu_api",
          url: "https://i.y.qq.com/v8/playsong.html?songmid=000Zl8ez0wdt96&type=0",
          favorited: false,
        },
        {
          name: "Butterflies",
          artist: "Sia",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/4.jpg",
          source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/4.mp3",
          url: "https://www.youtube.com/watch?v=kYgGwWYOd9Y",
          favorited: false
        },
        {
          name: "The Final Victory",
          artist: "Haggard",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/5.jpg",
          source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/5.mp3",
          url: "https://www.youtube.com/watch?v=0WlpALnQdN8",
          favorited: true
        },
        {
          name: "Genius ft. Sia, Diplo, Labrinth",
          artist: "LSD",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/6.jpg",
          source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/6.mp3",
          url: "https://www.youtube.com/watch?v=HhoATZ1Imtw",
          favorited: false
        },
        {
          name: "The Comeback Kid",
          artist: "Lindi Ortega",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/7.jpg",
          source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/7.mp3",
          url: "https://www.youtube.com/watch?v=me6aoX0wCV8",
          favorited: true
        },
        {
          name: "Overdose",
          artist: "Grandson",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/8.jpg",
          source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/8.mp3",
          url: "https://www.youtube.com/watch?v=00-Rl3Jlx-o",
          favorited: false
        },
        {
          name: "Rag'n'Bone Man",
          artist: "Human",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
          source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/9.mp3",
          url: "https://www.youtube.com/watch?v=L3wKzyIN1yk",
          favorited: false
        }
      ],
      currentTrack: null,
      currentTrackIndex: 0,
      transitionName: null
    };
  },
  methods: {
    play() {
      if (this.audio.paused) {
        this.audio.play();
        this.isTimerPlaying = true;
      } else {
        this.audio.pause();
        this.isTimerPlaying = false;
      }
    },
    generateTime() {
      let width = (100 / this.audio.duration) * this.audio.currentTime;
      this.barWidth = width + "%";
      this.circleLeft = width + "%";
      let durmin = Math.floor(this.audio.duration / 60);
      let dursec = Math.floor(this.audio.duration - durmin * 60);
      let curmin = Math.floor(this.audio.currentTime / 60);
      let cursec = Math.floor(this.audio.currentTime - curmin * 60);
      if (durmin < 10) {
        durmin = "0" + durmin;
      }
      if (dursec < 10) {
        dursec = "0" + dursec;
      }
      if (curmin < 10) {
        curmin = "0" + curmin;
      }
      if (cursec < 10) {
        cursec = "0" + cursec;
      }
      this.duration = durmin + ":" + dursec;
      this.currentTime = curmin + ":" + cursec;
    },
    updateBar(x) {
      let progress = this.$refs.progress;
      let maxduration = this.audio.duration;
      let position = x - progress.offsetLeft;
      let percentage = (100 * position) / progress.offsetWidth;
      if (percentage > 100) {
        percentage = 100;
      }
      if (percentage < 0) {
        percentage = 0;
      }
      this.barWidth = percentage + "%";
      this.circleLeft = percentage + "%";
      this.audio.currentTime = (maxduration * percentage) / 100;
      this.audio.play();
    },
    clickProgress(e) {
      this.isTimerPlaying = true;
      this.audio.pause();
      this.updateBar(e.pageX);
    },
    prevTrack() {
      this.transitionName = "scale-in";
      this.isShowCover = false;
      if (this.currentTrackIndex > 0) {
        this.currentTrackIndex--;
      } else {
        this.currentTrackIndex = this.tracks.length - 1;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    nextTrack() {
      this.transitionName = "scale-out";
      this.isShowCover = false;
      if (this.currentTrackIndex < this.tracks.length - 1) {
        this.currentTrackIndex++;
      } else {
        this.currentTrackIndex = 0;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    resetPlayer() {
      this.barWidth = 0;
      this.circleLeft = 0;
      this.audio.currentTime = 0;
      this.audio.src = this.currentTrack.source;
      setTimeout(() => {
        if(this.isTimerPlaying) {
          this.audio.play();
        } else {
          this.audio.pause();
        }
      }, 300);
    },
    favorite() {
      this.tracks[this.currentTrackIndex].favorited = !this.tracks[
        this.currentTrackIndex
      ].favorited;
    }
  },
 created() {
  let vm = this;
  this.currentTrack = this.tracks[0];
  this.audio = new Audio();
  this.audio.src = this.currentTrack.source;
  this.audio.ontimeupdate = function() {
    vm.generateTime();
  };
  this.audio.onloadedmetadata = function() {
    vm.generateTime();
  };
  this.audio.onended = function() {
    vm.nextTrack();
    this.isTimerPlaying = true;
  };

  // 假设你已经有了一个有效的 song 变量
    const params = new URLSearchParams(window.location.search.substring(1));
    const song=params.get("song");

  // 发送 API 请求
  fetch(`https://dg.slwu19.workers.dev/?song=${song}`)
    .then(response => response.json())
    .then(data => {
      // 解析 API 响应
      const newTrack = {
        name: data.song_name,
        artist: data.song_singer,
        cover: data.cover,
        source: data.music_url,
        url: data.link,
        favorited: false
      };

      // 将新曲目插入到 tracks 的第一个位置
      vm.tracks.unshift(newTrack);

      // 更新当前曲目为新插入的曲目
      vm.currentTrack = vm.tracks[0];

      // 设置音频对象的源
      vm.audio.src = vm.currentTrack.source;

      // 播放新曲目
      vm.audio.play();
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });

  // 预加载封面图像
  for (let index = 0; index < this.tracks.length; index++) {
    const element = this.tracks[index];
    let link = document.createElement('link');
    link.rel = "prefetch";
    link.href = element.cover;
    link.as = "image";
    document.head.appendChild(link);
  }
}
});
