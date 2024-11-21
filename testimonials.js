document.addEventListener("DOMContentLoaded", function () {
    const testimonials = [
        {
            name: "Ahmet Yılmaz",
            comment: "Wuhit sayesinde sitemin trafiği gözle görülür şekilde arttı!",
            rating: 5
        },
        {
            name: "Elif Demir",
            comment: "SEO çalışmalarımda Wuhit vazgeçilmez bir araç oldu.",
            rating: 5
        },
        {
            name: "Mehmet Çelik",
            comment: "Hit gönderiminde en etkili bot, kesinlikle tavsiye ederim.",
            rating: 5
        },
        {
            name: "Ayşe Kara",
            comment: "Wuhit ile reklam gelirlerim iki katına çıktı.",
            rating: 5
        },
        {
            name: "Burak Öz",
            comment: "Kullanımı kolay ve çok etkili bir bot.",
            rating: 5
        },
        {
            name: "Zeynep Güneş",
            comment: "Müşteri desteği harika, tüm sorularımı yanıtladılar.",
            rating: 5
        },
        {
            name: "Emre Yıldırım",
            comment: "Proxy desteği sayesinde güvenli hit gönderimi yapabiliyorum.",
            rating: 5
        },
        {
            name: "Deniz Aksoy",
            comment: "Wuhit ile sitenin SEO performansı ciddi şekilde iyileşti.",
            rating: 5
        },
        {
            name: "Selin Şahin",
            comment: "Güncel ve etkili bir hit botu arayanlar için ideal.",
            rating: 5
        },
        {
            name: "Murat Polat",
            comment: "Wuhit, rakiplerimin önüne geçmemi sağladı.",
            rating: 5
        }
    ];

    const testimonialBody = document.getElementById('testimonial-body');

    testimonials.forEach(testimonial => {
        const tr = document.createElement('tr');

        const nameTd = document.createElement('td');
        nameTd.textContent = testimonial.name;

        const commentTd = document.createElement('td');
        commentTd.textContent = testimonial.comment;

        const ratingTd = document.createElement('td');
        ratingTd.innerHTML = '⭐'.repeat(testimonial.rating);

        tr.appendChild(nameTd);
        tr.appendChild(commentTd);
        tr.appendChild(ratingTd);

        testimonialBody.appendChild(tr);
    });
});
