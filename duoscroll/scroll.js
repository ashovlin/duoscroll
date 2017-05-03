function scrollToFirstUnlockedSkill() {

  var unlockedSkills = document.getElementsByClassName("W1dac");

  for (skill of unlockedSkills) {
  		var dataset = skill.dataset.test;

  		// don't include the bonus row (purple) for now
  		if (dataset.includes("red")|| dataset.includes("green"))
  		{
	  		skill.scrollIntoViewIfNeeded(true);
	  		return;  			
  		}
	}
}

scrollToFirstUnlockedSkill();