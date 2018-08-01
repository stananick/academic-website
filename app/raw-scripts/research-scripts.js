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
          <p class="paper-listing__item__venue">
            ${researchItem.venue ? `${researchItem.venue}` : ''}${researchItem.venue && researchItem.date ? ',' : ''}
            ${researchItem.date ? `${researchItem.date}` : ''}
          </p>
          ${researchItem.originalLink ? `<a class="paper-listing__item__link" href="${researchItem.originalLink}">Publisher Website</a>` : ''}

          <section class="paper-listing__item__more">
            <section class="paper-listing__item__tabs">
              ${researchItem.abstract ? `
                <p class="paper-listing__item__more__abstract-tab">Abstract <span>&raquo;</span></p>
              ` : ''}

              ${researchItem.bibtex ? `
                <p class="paper-listing__item__more__bibtex-tab">Bibtex <span>&raquo;</span></p>
              ` : ''}
            </section>

            ${researchItem.abstract ? `<p class="paper-listing__item__more__abstract-body">${researchItem.abstract}</p>` : ''}

            ${researchItem.bibtex ? `<p class="paper-listing__item__more__bibtex-body"><code>${researchItem.bibtex}</code></p>` : ''}
          </section>
        </section>
      `);
  });

  $('.paper-listing__item__more__abstract-tab').click(function() {
    let self = $(this);
    let itemToggle = self.parent().parent().find('.paper-listing__item__more__abstract-body');

    if(itemToggle.hasClass('expanded')) {
      itemToggle.removeClass('expanded').slideUp();
    } else {
      if(itemToggle.siblings().hasClass('expanded')) {
        itemToggle.siblings().removeClass('expanded');
        $('.paper-listing__item__more__bibtex-body').slideUp();
        setTimeout(function() {
          itemToggle.addClass('expanded').slideDown();
        }, 400);
      } else {
        itemToggle.addClass('expanded').slideDown();
      }
    }
  });

  $('.paper-listing__item__more__bibtex-tab').click(function() {
    let self = $(this);
    let itemToggle = self.parent().parent().find('.paper-listing__item__more__bibtex-body');

    if(itemToggle.hasClass('expanded')) {
      itemToggle.removeClass('expanded').slideUp();
    } else { 
      if(itemToggle.siblings().hasClass('expanded')) {
        itemToggle.siblings().removeClass('expanded');
        $('.paper-listing__item__more__abstract-body').slideUp();
        setTimeout(function() {
          itemToggle.addClass('expanded').slideDown();
        }, 400);
      } else {
        itemToggle.addClass('expanded').slideDown();
      }
    }
  });
});

