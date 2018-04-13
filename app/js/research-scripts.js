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

  //Slide down toggle
//   $('.paper-listing__item__tabs p').click(function(){
//     let self = $(this);
//     let className = self.attr('class').replace('tab', 'body');

//     //let itemBody = self.parent().siblings('.paper-listing__item__body');

//     let toggleItem = self.parent().parent().find('.' + className);

//     toggleItem.slideToggle();

//     // if(itemBody.hasClass('expanded')) {
//     //   itemBody.removeClass('expanded')
//     //   toggleItem.slideUp();

//     //   itemBody.addClass('expanded')
//     //   toggleItem.slideDown();
//     //   console.log('test');
//     // } else {
//     //   itemBody.addClass('expanded')
//     //   toggleItem.slideDown();
//     //   console.log('yes');
//     // }
//   });
  $('.paper-listing__item__more__abstract-tab').click(function() {
    let self = $(this);
    let itemToggle = self.parent().parent().find('.paper-listing__item__more__abstract-body');
    
    itemToggle.slideToggle().addClass('expanded');
  });

  $('.paper-listing__item__more__bibtex-tab').click(function() {
    let self = $(this);
    let itemToggle = self.parent().parent().find('.paper-listing__item__more__bibtex-body');
    
    itemToggle.slideToggle().addClass('expanded');
  });

});

