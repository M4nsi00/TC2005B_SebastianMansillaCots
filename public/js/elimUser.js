document.addEventListener('click', async (e) => {
    if (e.target.classList.contains('btn-eliminar')) {
        const userId = e.target.getAttribute('data-id');
        
        const token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
        console.log("Enviando token:", token);
    
        const result = await Swal.fire({            
            title: '¿Estás seguro?',
            text: "Esta acción no se puede deshacer",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'Cancelar'
        });

        if (result.isConfirmed) {
            try {
                const response = await fetch(`/labs/lab13/eliminar/${userId}`, {
                    method: 'DELETE',
                    headers: {
                        'X-CSRF-Token': token, 
                        'Content-Type': 'application/json'
                    }
                });

                if (response.ok) {
                    Swal.fire('Eliminado', 'Usuario borrado con éxito', 'success');
                    document.getElementById(`user-card-${userId}`).remove();
                } else {
                    Swal.fire('Error', 'No tienes permiso o el token expiró', 'error');
                }
            } catch (error) {
                console.error(error);
            }
        }
    }
});