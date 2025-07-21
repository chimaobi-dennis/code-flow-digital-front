import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight, Loader2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface ProjectFormData {
  projectType: string;
  budget: string;
  timeline: string;
  name: string;
  email: string;
  company: string;
  description: string;
}

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PROJECT_TYPES = [
  { value: "web-design", label: "Web Design" },
  { value: "mobile-app", label: "Mobile App" },
  { value: "e-commerce", label: "E-commerce Platform" },
  { value: "web-app", label: "Web Application" },
  { value: "backend-api", label: "Backend API" },
  { value: "cloud-solution", label: "Cloud Solution" },
  { value: "ui-ux", label: "UI/UX Design" },
  { value: "full-service", label: "Full Service Suite" },
];

const BUDGETS = [
  { value: "5k-15k", label: "$5,000 - $15,000" },
  { value: "15k-30k", label: "$15,000 - $30,000" },
  { value: "30k-50k", label: "$30,000 - $50,000" },
  { value: "50k+", label: "$50,000+" },
];

const TIMELINES = [
  { value: "1-2months", label: "1-2 months" },
  { value: "2-4months", label: "2-4 months" },
  { value: "4-6months", label: "4-6 months" },
  { value: "6months+", label: "6+ months" },
];

export const ProjectModal = ({ isOpen, onClose }: ProjectModalProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm<ProjectFormData>();

  const totalSteps = 6;
  const progress = (currentStep / totalSteps) * 100;

  const projectType = watch("projectType");
  const budget = watch("budget");
  const timeline = watch("timeline");

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const onSubmit = async (data: ProjectFormData) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Project submitted successfully!",
      description: "We'll get back to you within 24 hours.",
    });
    
    setIsSubmitting(false);
    setCurrentStep(1);
    onClose();
  };

  const handleClose = () => {
    setCurrentStep(1);
    onClose();
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">What type of project do you need?</h3>
              <RadioGroup value={projectType} onValueChange={(value) => setValue("projectType", value)}>
                <div className="grid grid-cols-1 gap-3">
                  {PROJECT_TYPES.map((type) => (
                    <div key={type.value} className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-accent">
                      <RadioGroupItem value={type.value} id={type.value} />
                      <Label htmlFor={type.value} className="flex-1 cursor-pointer">{type.label}</Label>
                    </div>
                  ))}
                </div>
              </RadioGroup>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">What's your budget range?</h3>
              <RadioGroup value={budget} onValueChange={(value) => setValue("budget", value)}>
                <div className="grid grid-cols-1 gap-3">
                  {BUDGETS.map((budgetOption) => (
                    <div key={budgetOption.value} className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-accent">
                      <RadioGroupItem value={budgetOption.value} id={budgetOption.value} />
                      <Label htmlFor={budgetOption.value} className="flex-1 cursor-pointer">{budgetOption.label}</Label>
                    </div>
                  ))}
                </div>
              </RadioGroup>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">What's your preferred timeline?</h3>
              <RadioGroup value={timeline} onValueChange={(value) => setValue("timeline", value)}>
                <div className="grid grid-cols-1 gap-3">
                  {TIMELINES.map((timelineOption) => (
                    <div key={timelineOption.value} className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-accent">
                      <RadioGroupItem value={timelineOption.value} id={timelineOption.value} />
                      <Label htmlFor={timelineOption.value} className="flex-1 cursor-pointer">{timelineOption.label}</Label>
                    </div>
                  ))}
                </div>
              </RadioGroup>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">Tell us about yourself</h3>
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input 
                  id="name" 
                  {...register("name", { required: "Name is required" })} 
                  placeholder="Your full name"
                />
                {errors.name && <p className="text-sm text-destructive mt-1">{errors.name.message}</p>}
              </div>
              <div>
                <Label htmlFor="email">Email *</Label>
                <Input 
                  id="email" 
                  type="email"
                  {...register("email", { 
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address"
                    }
                  })} 
                  placeholder="your@email.com"
                />
                {errors.email && <p className="text-sm text-destructive mt-1">{errors.email.message}</p>}
              </div>
              <div>
                <Label htmlFor="company">Company (Optional)</Label>
                <Input 
                  id="company" 
                  {...register("company")} 
                  placeholder="Your company name"
                />
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">Tell us more about your project</h3>
            <div>
              <Label htmlFor="description">Project Description *</Label>
              <Textarea 
                id="description"
                {...register("description", { required: "Project description is required" })}
                placeholder="Describe your project in detail. What are your goals, requirements, and any specific features you need?"
                rows={6}
                className="resize-none"
              />
              {errors.description && <p className="text-sm text-destructive mt-1">{errors.description.message}</p>}
            </div>
          </div>
        );

      case 6:
        return (
          <div className="space-y-6 text-center">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Review Your Project Details</h3>
              <div className="text-left space-y-3 p-4 bg-accent rounded-lg">
                <p><strong>Project Type:</strong> {PROJECT_TYPES.find(t => t.value === projectType)?.label}</p>
                <p><strong>Budget:</strong> {BUDGETS.find(b => b.value === budget)?.label}</p>
                <p><strong>Timeline:</strong> {TIMELINES.find(t => t.value === timeline)?.label}</p>
                <p><strong>Contact:</strong> {watch("name")} ({watch("email")})</p>
                {watch("company") && <p><strong>Company:</strong> {watch("company")}</p>}
              </div>
              <p className="text-sm text-muted-foreground">
                Ready to submit? We'll review your project and get back to you within 24 hours with a detailed proposal.
              </p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Start Your Project</DialogTitle>
          <div className="space-y-2">
            <Progress value={progress} className="h-2" />
            <p className="text-sm text-muted-foreground">Step {currentStep} of {totalSteps}</p>
          </div>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {renderStep()}

          <div className="flex justify-between pt-6 border-t">
            <Button 
              type="button" 
              variant="outline" 
              onClick={prevStep}
              disabled={currentStep === 1}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Previous
            </Button>

            {currentStep === totalSteps ? (
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="btn-gradient flex items-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Submit Project"
                )}
              </Button>
            ) : (
              <Button 
                type="button" 
                onClick={nextStep}
                className="btn-gradient flex items-center gap-2"
              >
                Next
                <ArrowRight className="w-4 h-4" />
              </Button>
            )}
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};