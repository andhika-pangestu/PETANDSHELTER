function togglePhilosophyDescription() {
    const fullPhilosophyElement = document.getElementById('full-philosophy');

    if (fullPhilosophyElement.style.display === 'none' || fullPhilosophyElement.style.display === '') {
        fullPhilosophyElement.style.display = 'block';
    } else {
        fullPhilosophyElement.style.display = 'none';
    }
}
function toggleText(id) {
    var element = document.getElementById(id);
    if (element.style.display === "none") {
        element.style.display = "block";
        if (id === "philosophy-text") {
            document.getElementById("our-vision").style.marginTop = "20px";
            document.getElementById("our-mission").style.marginTop = "20px";
        }
    } else {
        element.style.display = "none";
        if (id === "philosophy-text") {
            document.getElementById("our-vision").style.marginTop = "0";
            document.getElementById("our-mission").style.marginTop = "0";
        }
    }
}
document.addEventListener('DOMContentLoaded', function() {
    const whyChooseUsContentElement = document.getElementById('why-choose-us-content');

    if (whyChooseUsContentElement) {
        const whyChooseUsContent =
            `<table>
                <tr>
                    <th>Why Choose Us</th>
                    <th>Details</th>
                </tr>
                <tr>
                    <td>Genuine Love and Care</td>
                    <td>
                        Menyediakan tempat bagi hewan-hewan yang terlantar atau
                        terbuang untuk menemukan rumah yang penuh kasih.
                    </td>
                </tr>
                <tr>
                    <td>Transparent and Safe Adoption Process</td>
                    <td>
                        Menyediakan tempat bagi hewan-hewan yang terlantar atau
                        terbuang untuk menemukan rumah yang penuh kasih.
                    </td>
                </tr>
                <tr>
                    <td>Post-Adoption Guidance and Support</td>
                    <td>
                        Menyediakan tempat bagi hewan-hewan yang terlantar atau
                        terbuang untuk menemukan rumah yang penuh kasih.
                    </td>
                </tr>
                <tr>
                    <td>Animal Welfare at the Forefront</td>
                    <td>
                        Menyediakan tempat bagi hewan-hewan yang terlantar atau
                        terbuang untuk menemukan rumah yang penuh kasih.
                    </td>
                </tr>
                <tr>
                    <td>Diverse Range of Animals</td>
                    <td>
                        Menyediakan tempat bagi hewan-hewan yang terlantar atau
                        terbuang untuk menemukan rumah yang penuh kasih.
                    </td>
                </tr>
                <tr>
                    <td>Share in Making a Difference</td>
                    <td>
                        Menyediakan tempat bagi hewan-hewan yang terlantar atau
                        terbuang untuk menemukan rumah yang penuh kasih.
                    </td>
                </tr>
            </table>`;

        whyChooseUsContentElement.innerHTML = whyChooseUsContent;
    }
});
