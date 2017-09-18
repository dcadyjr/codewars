function songDecoder(song){
  array = []
  remix = song.replace(/WUB/g, ' ');
  remix = remix.replace(/ /g, '');	
  array.push(remix);
  answer = array.join();
  str = answer.split('').join(' ');
  return str;

}

songDecoder("AWUBBWUBC");