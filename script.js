document.addEventListener('DOMContentLoaded', function() {
  const generateBtn = document.getElementById('generateUser');
  
  async function fetchUser() {
      try {
          const response = await fetch('https://randomuser.me/api/');
          const data = await response.json();
          const user = data.results[0];
          
         
          document.getElementById('userName').textContent = 
              `${user.name.first} ${user.name.last}`;
          document.getElementById('userEmail').textContent = user.email;
          document.getElementById('userPhoto').src = user.picture.large;
          document.getElementById('userLocation').textContent = user.location.street.number + " " + user.location.street.name;
          document.getElementById('userCoordinates').textContent = user.location.coordinates.latitude + ", " + user.location.coordinates.longitude
          document.getElementById('userTimezone').textContent = user.location.timezone.offset + " - " + user.location.timezone.description
          document.getElementById('userDob').textContent = new Date(user.dob.date).toLocaleDateString()
      } catch (error) {
          console.error("Erro:", error);
          document.querySelector('.user-card').innerHTML = 
              '<p class="error">Erro ao carregar. Tente novamente.</p>';
      }
  }

  generateBtn.addEventListener('click', fetchUser);
  fetchUser(); 
});