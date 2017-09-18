function songDecoder(song){
  
  remix = song.split("WUB").join();
  
  remix = remix.replace(/,/g, ' ').replace(/ +(?= )/g,'').trim();
  
  return remix;
}

songDecoder("WUBJKDWUBWUBWBIRAQKFWUBWUBYEWUBWUBWV");

// Expected: 'JKD WBIRAQKF YE WV', instead got: 'J K D W B I R A Q K F Y E W V'
// Expected: 'KSDHEMIXUJ R S H', instead got: 'K S D H E M I X U J R S H'
// Expected: 'Q QQ I WW JOPJPBRH', instead got: 'Q Q Q I W W J O P J P B R H'
// Expected: 'O IPVCQAFWY Q XHDKCPYKCTWWY V FZ', instead got: 'O I P V C Q A F W Y Q X H D K C P Y K C T W W Y V F Z'
// Expected: 'YYRTSMNWU C C FSYUINDWOBV F AU V JB', instead got: 'Y Y R T S M N W U C C F S Y U I N D W O B V F A U V J B'
// Expected: 'KSDHEMIXUJ R S H', instead got: 'K S D H E M I X U J R S H'