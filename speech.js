const speak = (msg) => {
  const sp = new SpeechSynthesisUtterance(msg);
  [sp.voice] = speechSynthesis.getVoices();
  };
  
speak('My name is Vrinda Vinod'
+'You are welcome for this');
