import { Component, OnInit } from '@angular/core';
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
    successMessage = '';
    errorMessage = '';

    constructor(private fb: FormBuilder) { }

    ngOnInit(): void {
        this.contactForm = this.fb.group({
            name: ['', Validators.required],
            email: [''],
            phone: ['', Validators.required],
            message: ['']
        });
    }

    submitForm() {
        if (this.contactForm.invalid) {
            this.contactForm.markAllAsTouched();
            return;
        }

        this.isSubmitting = true;

        emailjs.send(
            'service_2xp4yzs',
            'template_ip073ea',
            {
                name: this.contactForm.value.name || 'no-name-given',
                email: this.contactForm.value.email || 'no-email-given',
                phone: this.contactForm.value.phone || 'no-phone-given',
                message: this.contactForm.value.message || 'no-message-given'
            },
            'RlomUTb_Pzmegi-o8'
        ).then(
            () => {
                this.successMessage = 'Request submitted successfully!';
                this.errorMessage = '';
                this.contactForm.reset();
                this.isSubmitting = false;
            },
            (error) => {
                console.error(error);
                this.errorMessage = 'Something went wrong. Please try again.';
                this.successMessage = '';
                this.isSubmitting = false;
            }
        );
    }
}