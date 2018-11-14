const watchFirstEpisode = function() {
    
    console.log('Watch first episode');
  };
  
  const watchBreakingBad = function() {
    console.log('Watching Breaking bad');
     watchFirstEpisode();
    console.log('No more for today');
  };
  
  const goForARun = function() {
    console.log('Im running! look at me!');
  }
  
  const helpStudentsWithHomework = function() {
    console.log('Help help help');
  }
  
  function finishMondayEvening(functionThatIsParameter) {
    functionThatIsParameter();
    goForARun();
    helpStudentsWithHomework();
    console.log('done for today')
  }
  finishMondayEvening(watchBreakingBad);