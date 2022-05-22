<template>
<div>
    <nav aria-label="Page navigation example">
        <ul class="pagination">
            <li class="page-item"><a class="page-link">Previous</a></li>
            <li class="page-item"><a class="page-link" href="#">-</a></li>
            <li class="page-item"><a class="page-link" href="#">-</a></li>
            <li class="page-item"><a class="page-link" @click="this.$store.dispatch('nextPage'); this.$store.dispatch('getMovies')">Next</a></li>
        </ul>
    </nav>
</div>
</template>