interface Book {
    id: string;
    title: string;
    author: string;
    genre: string;
    rating: number;
    totalCopies: number;
    availableCopies: number;
    description: string;
    coverColor: string;
    cover: string;
    video: string;
    summary: string;
    createdAt: Date | null;
    //isLoanedBook: boolean;
}

interface AuthCredentials {
    fullName: string;
    email: string;
    password: string;
    universityId: number;
    universityCard: string;
}

interface BookParams {
    title: string;
    author: string;
    genre: string;
    rating: number;
    cover: string;
    coverColor: string;
    description: string;
    totalCopies: number;
    video: string;
    summary: string;
}

interface BorrowBookParams {
    bookId: string;
    userId: string;
}