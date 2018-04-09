$(document).ready(function() {
//Research Items
  var data = researchJSON.paperInfo;
  $.each(data, function(i, researchItem) {
    $('.paper-listing').append(
      `<section class="paper-listing__item">
        <section class="paper-listing__item__image">
          ${researchItem.image ? `<img src="${researchItem.image}" alt="${researchItem.altText}">` : ''}
        </section>
        <section>
          ${researchItem.title ? `<h4 class="paper-listing__item__title">${researchItem.title}</h4>` : ''}
          ${researchItem.authors ? `<p class="paper-listing__item__authors"><em>By: ${researchItem.authors}</em></p>` : ''}
          ${researchItem.venue ? `<p class="paper-listing__item__venue">${researchItem.venue}</p>` : ''}
          ${researchItem.date ? `<p class="paper-listing__item__date">${researchItem.date}</p>` : ''}
          ${researchItem.originalLink ? `<a class="paper-listing__item__link" href="${researchItem.originalLink}">Publisher Website</a>` : ''}

          ${researchItem.abstract ? `
          <section class="paper-listing__item__more">
            <p class="paper-listing__item__more__title">Abstract <span>&raquo;</span></p>
            <p class="paper-listing__item__more__content">${researchItem.abstract}</p>
          </section>
          ` : ''}

          ${researchItem.bibtex ? `
          <section class="paper-listing__item__more">
            <p class="paper-listing__item__more__title">Bibtex <span>&raquo;</span></p>
            <p class="paper-listing__item__more__content"><code>${researchItem.bibtex}</code></p>
          </section>
          ` : ''}
        </section>
        `);
  });

  //Slide down toggle
  $('.paper-listing__item__more__title').click(function(){
    $(this).next('p').slideToggle();
  });
});