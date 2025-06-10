export const Footer = () =>{
    return (
<footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-col justify-center items-center gap-4">
    <p className="text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} FadliSamaai.co. All rights reserved.
    </p>
</footer>
    );
};