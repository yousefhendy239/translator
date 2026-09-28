const textAreaTranslate = document.querySelector(".textAreaTranslate");
const textAreaTranslatedTo = document.querySelector(".textAreaTranslatedTo");
const selectLanguageTranslate = document.querySelector(
  ".selectLanguageTranslate",
);
const selectLanguageTranslateTo = document.querySelector(
  ".selectLanguageTranslateTo",
);
const buttonTranslate = document.querySelector(".btn");

buttonTranslate.addEventListener("click", async () => {
  try {
    let apiTranslate = await fetch(
      `https://api.mymemory.translated.net/get?q=${textAreaTranslate.value}&langpair=${selectLanguageTranslate.value}|${selectLanguageTranslateTo.value}`,
    );
    let data = await apiTranslate.json();
    console.log(data);
    textAreaTranslatedTo.value = data.responseData.translatedText;
  } catch (error) {
    console.log(error);
  }
});
