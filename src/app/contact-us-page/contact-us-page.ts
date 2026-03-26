import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
    selector: 'app-contact-us-page',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './contact-us-page.html',
    styleUrls: ['./contact-us-page.scss']
})
export class ContactUsPageComponent implements OnInit {

    contactForm!: FormGroup;

    isSubmitting = false;
    errorMessage = '';
    copiedField: 'phone' | 'office' | 'email' | 'address' | 'website' | null = null;
    showSuccessPopup = false;
    private popupTimer: ReturnType<typeof setTimeout> | null = null;

    constructor(private fb: FormBuilder) { }

    ngOnInit(): void {
        this.contactForm = this.fb.group({
            name: ['', Validators.required],
            email: [''],
            phone: ['', Validators.required],
            message: ['']
        });
    }

    ngOnDestroy(): void {
        if (this.popupTimer) {
            clearTimeout(this.popupTimer);
        }
    }

    submitForm() {
        if (this.contactForm.invalid) {
            this.contactForm.markAllAsTouched();
            return;
        }

        this.isSubmitting = true;

        emailjs.send(
            'service_wh7l151',
            'template_87ya4qq',
            {
                name: this.contactForm.value.name || 'no-name-given',
                email: this.contactForm.value.email || 'no-email-given',
                phone: this.contactForm.value.phone || 'no-phone-given',
                message: this.contactForm.value.message || 'no-message-given'
            },
            'Wv9zDZC171tZDoqKP'
        ).then(
            () => {
                this.errorMessage = '';
                this.contactForm.reset();
                this.isSubmitting = false;
                this.triggerSuccessPopup();
            },
            (error) => {
                console.error(error);
                this.errorMessage = 'Something went wrong. Please try again.';
                this.isSubmitting = false;
            }
        );
    }

    async copyField(field: 'phone' | 'office' | 'email' | 'address' | 'website', value: string): Promise<void> {

        try {
            await navigator.clipboard.writeText(value);
            this.showCopiedState(field);
        } catch {
            const textArea = document.createElement('textarea');
            textArea.value = value;
            textArea.style.position = 'fixed';
            textArea.style.opacity = '0';
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            this.showCopiedState(field);
        }
    }

    private showCopiedState(field: 'phone' | 'office' | 'email' | 'address' | 'website'): void {
        this.copiedField = field;
        setTimeout(() => {
            if (this.copiedField === field) {
                this.copiedField = null;
            }
        }, 1800);
    }

    private triggerSuccessPopup(): void {
        this.showSuccessPopup = true;
        if (this.popupTimer) {
            clearTimeout(this.popupTimer);
        }
        this.popupTimer = setTimeout(() => {
            this.showSuccessPopup = false;
            this.popupTimer = null;
        }, 3400);
    }
}