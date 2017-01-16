function scrollToFirstUnlockedSkill() {

  var unlockedSkills = document.getElementsByClassName("unlocked");

  for (skill of unlockedSkills) {
  	// Skip the unlockable skills in the bonus row for now
  	if (!skill.parentElement.parentElement.parentElement.className.includes("bonus-row")) {
  		skill.scrollIntoViewIfNeeded(true);
  		return;
  	}
  }
}

scrollToFirstUnlockedSkill();